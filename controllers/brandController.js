import Brand from "../models/brand";

export function brand_list(req, res, next) {
  Brand.find({})
    .sort("name")
    .exec((err, result) => {
      if (err) {
        return next(err);
      }
      res.render("brand_list", { title: "Brand List", brand_list: result });
    });
}

export function brand_detail(req, res) {
  res.send("NOT IMPLEMENTED: Brand Detail: " + req.params.id);
}

export function brand_create_get(req, res) {
  res.send("NOT IMPLEMENTED: Brand create GET");
}

export function brand_create_post(req, res) {
  res.send("NOT IMPLEMENTED: Brand create POST");
}

export function brand_delete_get(req, res) {
  res.send("NOT IMPLEMENTED: Brand delete GET");
}

export function brand_delete_post(req, res) {
  res.send("NOT IMPLEMENTED: Brand delete POST");
}

export function brand_update_get(req, res) {
  res.send("NOT IMPLEMENTED: Brand update GET");
}

export function brand_update_post(req, res) {
  res.send("NOT IMPLEMENTED: Brand update POST");
}
