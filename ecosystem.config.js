module.exports = {
    apps : [{
        name: 'agent',
        script: './bin/www',
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        instances: 0,
        env: {
            NODE_ENV: 'development',
            "PINPOINT_CONTAINER": "false",
            "PINPOINT_AGENT_ID": "pinpoint-node",
            "PINPOINT_APPLICATION_NAME": "localhost",
            "PINPOINT_COLLECTOR_IP": "localhost",
            "PINPOINT_LOG_LEVEL": "DEBUG",
            "PINPOINT_SAMPLING_RATE": "1",
        },
        env_production: {
            NODE_ENV: 'local',
        }
    }],
};
