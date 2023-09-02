const router = require('express').Router();

const { createdMenu, updateMenu, getAllMenu,getOneMenu, deleteMenu} = require('../controllers/menuController')
const { protect, admin } = require ("../middleware/authMiddleware");


router.route("/").post(protect,admin, createdMenu).get(getAllMenu);
router
  .route("/:id")
  .put(protect, admin,  updateMenu)
  .delete( protect, admin,deleteMenu)
  .get(getOneMenu);
 
 
module.exports = router
