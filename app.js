const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");


// Sentry Init
Sentry.init({
    dsn: "https://86ff7955d58dab5c0d113d7677b7fce0@o4504016161144832.ingest.us.sentry.io/4507368759558144",
    integrations: [
        nodeProfilingIntegration(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions

    // Set sampling rate for profiling - this is relative to tracesSampleRate
    profilesSampleRate: 1.0,
});

// Загружаем нужные самописные модули
const COMMONS = require("./modules/commons");
const CONFIGURATION = require("./modules/configuration");

// Загружаем файлы конфигурации в глобальные переменные
CONFIGURATION.reloadAllConfigurations();
CONFIGURATION.migrateOldMainConfig();
CONFIGURATION.migrateOldServersConfig();

// Создаём нужные папки (если их не существует)
COMMONS.makeBaseDirs();

const LOGGER = require("./modules/logger");
const MULTI_LANGUAGE = require("./modules/multiLanguage");
const PREDEFINED = require("./modules/predefined");
const TASK_MANAGER = require("./modules/taskManager");
const UPDATER = require("./modules/updater");
const WEBSERVER = require("./modules/webserver");
const SECURITY = require("./modules/security");
const STATS_COLLECTION = require("./modules/statsCollection");
const CORES_MANAGER = require("./modules/coresManager");
const DOWNLOADS_MANAGER = require("./modules/downloadsManager");
const JAVA_MANAGER = require("./modules/javaManager");
const SERVERS_GENERATOR = require("./modules/serversGenerator");
const FTP_DAEMON = require("./modules/ftpDaemon");

const collStats = STATS_COLLECTION.collectStats();
STATS_COLLECTION.sendStatsToServer(collStats, true);

// Загружаем доступные языки и ставим переменную с языком из конфига
MULTI_LANGUAGE.loadAvailableLanguages();
global.currentLanguage = mainConfig.language;

// Показываем приветствие
LOGGER.kubekWelcomeMessage();

WEBSERVER.loadAllDefinedRouters();
WEBSERVER.startWebServer();

// Запускаем FTP-сервер
global.ftpDaemon = null;
FTP_DAEMON.startFTP();

// Автоматически запустить сервера, которые были запущены при закрытии Kubek
CONFIGURATION.autoStartServers();