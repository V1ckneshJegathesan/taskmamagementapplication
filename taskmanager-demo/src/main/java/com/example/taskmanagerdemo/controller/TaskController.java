package com.example.taskmanagerdemo.controller;


import com.example.taskmanagerdemo.model.Task;
import com.example.taskmanagerdemo.repository.TaskRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public List<Task> list() {
        return taskRepository.findAll();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public Task get(@PathVariable Long id) {
        return taskRepository.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Task create(@RequestBody final Task task) {
        return taskRepository.saveAndFlush(task);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        taskRepository.deleteById(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Task update(@PathVariable Long id, @RequestBody Task task) {
        Task existingTask = taskRepository.getOne(id);
        BeanUtils.copyProperties(task, existingTask, "task_id");
        return taskRepository.saveAndFlush(existingTask);
    }

}
