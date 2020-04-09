package com.example.taskmanagerdemo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "tasks")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long task_id;

    private String task_name;

    private String task_description;

    private Integer task_duration;

    private String task_importance;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
    private Date task_start_date;

    public Task() {

    }

    public String getTask_name() {
        return task_name;
    }

    public void setTask_name(String task_name) {
        this.task_name = task_name;
    }

    public String getTask_description() {
        return task_description;
    }

    public void setTask_description(String task_description) {
        this.task_description = task_description;
    }

    public Integer getTask_duration() {
        return task_duration;
    }

    public void setTask_duration(Integer task_length) {
        this.task_duration = task_duration;
    }

    public Date getTask_start_date() {
        return task_start_date;
    }

    public void setTask_start_date(Date task_start_date) {
        this.task_start_date = task_start_date;
    }

    public String getTask_importance() {
        return task_importance;
    }

    public void setTask_importance(String task_importance) {
        this.task_importance = task_importance;
    }

}
