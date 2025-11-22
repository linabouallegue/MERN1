import Animal from "../models/Animal.js";

// CREATE
export const createAnimal = async (req, res) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ all
export const getAnimals = async (req, res) => {
  const animals = await Animal.find().populate("owner");
  res.json(animals);
};

// READ one
export const getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id).populate("owner");
    if (!animal) return res.status(404).json({ message: "Animal non trouvé" });
    res.json(animal);
  } catch {
    res.status(400).json({ message: "ID invalide" });
  }
};

// UPDATE
export const updateAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("owner");
    if (!animal) return res.status(404).json({ message: "Animal non trouvé" });
    res.json(animal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
export const deleteAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    if (!animal) return res.status(404).json({ message: "Animal non trouvé" });
    res.json({ message: "Animal supprimé" });
  } catch {
    res.status(400).json({ message: "ID invalide" });
  }
};
