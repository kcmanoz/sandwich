import React from "react";

const SideNav = (props) => {
  const { sideMenuOpen, setSideMenuOpen } = props;
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (sideMenuOpen) {
//       const interval = setInterval(() => {
//         getOrders().then((data) => setOrders(data));
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [sideMenuOpen]);

  return (
    <div className={sideMenuOpen ? "sidenav sidenav-open " : "sidenav"}>
      <p className="order-title">My Orders</p>
      <a className="closebtn" onClick={() => setSideMenuOpen(!sideMenuOpen)}>
        &times;
      </a>
      {/* {orders.length > 0 ? (
        orders.map((order) => (
          <Orders
            key={order._id}
            status={order.status}
            sandwich_id={order.sandwich_id}
          />
        ))
      ) : (
        <p className="order-title">No orders found.</p>
      )} */}
    </div>
  );
};

export default SideNav;
