import Task from "../models/Task";

export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();

  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  const task = await Task.findById(req.params.id).lean();
  console.log(task);

  res.render("edit", { task });
};

export const edit = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndRemove(id);

    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const tasdkDoggleDone = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  task.done = !task.done;

  await task.save();
  res.redirect("/");
};
