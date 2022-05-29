Todo Component Design

    Create list of components as follows:
        Todo Component - Renders a todo on page (description with status)
            on click of todo update the state of the todo
            should have a prop desc for description and status for the current state(complete or pending)
            should have a prop deleteTodo which will be a function that deletes todo from the todoList
        TodoList Component - Renders the TodoList containing list of Todo components on page
            should have a state containing list of todos
            should have a method deleteTodo to be passed to each todo component which will be called on click of a delete button of a respective Todo
            it should take todos as a prop which will contain the array of todos
    on click of todo update the value of the current status i.e if complete set it to pending and vice versa
    Add a button in a todo containing Delete text
        On click should delete the todo from the todo list
        this button should be part of Todo component
        on click it should update the todolist in the state of TodoList component
        delete should only delete the todo whose delete button is clicked
