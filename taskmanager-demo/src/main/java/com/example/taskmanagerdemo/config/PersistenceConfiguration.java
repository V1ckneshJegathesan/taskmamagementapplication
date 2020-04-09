package com.example.taskmanagerdemo.config;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class PersistenceConfiguration {

    @Bean
    public DataSource dataSource() {
        DataSourceBuilder builder = DataSourceBuilder.create();
        builder.url("<Your jdbc url>");
        builder.username("<Your database username>");
        builder.password("<Your database password");
        builder.driverClassName("<Your driver class name>");
        return builder.build();
    }



}
