import Car from "../models/car";

export function car_list(req, res, next) {
  Car.find()
    .sort("brand")
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      res.render("car_list", { title: "Car List", car_list: result });
    });
}

export function car_detail(req, res, next) {
  Car.findById(req.params.id)
    .populate("brand")
    .populate("category")
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      res.render("car_detail", { title: result.name, car: result });
    });
}

export function car_create_get(req, res) {
  res.send("NOT IMPLEMENTED: Car create GET");
}

export function car_create_post(req, res) {
  res.send("NOT IMPLEMENTED: Car create POST");
}

export function car_delete_get(req, res) {
  res.send("NOT IMPLEMENTED: Car delete GET");
}

export function car_delete_post(req, res) {
  res.send("NOT IMPLEMENTED: Car delete POST");
}

export function car_update_get(req, res) {
  res.send("NOT IMPLEMENTED: Car update GET");
}

export function car_update_post(req, res) {
  res.send("NOT IMPLEMENTED: Car update POST");
}
