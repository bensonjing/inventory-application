import async from "async";

import Category from "../models/category";
import Car from "../models/car";

export function category_list(req, res, next) {
  Category.find()
    .sort("name")
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      res.render("category_list", {
        title: "Category List",
        category_list: result,
      });
    });
}

export function category_detail(req, res, next) {
  async.parallel(
    {
      category(callback) {
        Category.findById(req.params.id).exec(callback);
      },
      cars(callback) {
        Car.find({ category: req.params.id }).exec(callback);
      },
    },
    (err, result) => {
      if (err) {
        return next(err);
      }
      if (result.category == null) {
        const err = new Error("Category Not Found");
        err.status = 404;
        next(err);
      }
      res.render("category_detail", {
        title: result.category.name,
        category: result.category,
        cars: result.cars,
      });
    }
  );
}

export function category_create_get(req, res) {
  res.send("NOT IMPLEMENTED: Category create GET");
}

export function category_create_post(req, res) {
  res.send("NOT IMPLEMENTED: Category create POST");
}

export function category_delete_get(req, res) {
  res.send("NOT IMPLEMENTED: Category delete GET");
}

export function category_delete_post(req, res) {
  res.send("NOT IMPLEMENTED: Category delete POST");
}

export function category_update_get(req, res) {
  res.send("NOT IMPLEMENTED: Category update GET");
}

export function category_update_post(req, res) {
  res.send("NOT IMPLEMENTED: Category update POST");
}
