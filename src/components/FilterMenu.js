import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsFilter } from "react-icons/bs";

export default function FilterMenu({ filterList, setFilterList }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const filterProduct = ["Aksesuar", "Resim"];

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <BsFilter
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="hover:text-black"
        style={{ height: "24px", width: "24px" }}
      ></BsFilter>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {filterProduct.map((item) => (
          <MenuItem
            style={{ fontSize: "0.95em", backgroundColor: filterList.filterKeyword === item ? "#bdbfc1" : "transparent"}}
            onClick={() => {
              if (filterList.filterKeyword && filterList.filterKeyword === item) {
                setFilterList({ ...filterList, filterKeyword: "" });
              } else {
                setFilterList({ ...filterList, filterKeyword: item });
              }
              setAnchorEl(null);
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
