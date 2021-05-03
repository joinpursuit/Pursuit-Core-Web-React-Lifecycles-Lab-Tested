# Pursuit-Core-Web-React-Lifecycle-Methods-Lab

[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

## Tasks

Build an app that has the following functionality:

- Users can create a new Todo by typing text into an `input` inside a `form` and pressing enter
- Shows a list of todos with id `#todos` underneath that input
  - Use an instance of a `Todo` component for each of the Todos
- Users can delete an existing Todo by pressing an 'x' `button` next to it

When a todo is created or deleted, a pop-up "toast" will appear to notify the user that the action has been completed.
Implement lifecycle methods to fire the created/deleted notifications:

- Use `componentDidMount` in `Todo` to show a `"success"` toast with the text `New todo added: {todo}`
- Use `componentWillUnmount` in `Todo` to show an `"error"` toast with the text `Todo deleted: {todo}`

For the toasts notifications, use the [react-toastify](https://github.com/fkhadra/react-toastify) library that has already been installed with this lab.
See its README.md for example usage; you might find the [react-toastify gist](https://github.com/fkhadra/react-toastify#the-gist) or the [demo playground](https://fkhadra.github.io/react-toastify/introduction/) very helpful in getting started.

![todos react app in use](./todosLifecycleAppGif.gif)

### Bonus

Use `componentDidUpdate` in `App` to show a toast with the text `Remaining todos: {count}` whenever the count of todos changes.

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm run cypress` to open the cypress testing window

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines

- When finished, commit and push your work.
- Make a pull request on github.
- Submit the link to your pull request on Canvas.


