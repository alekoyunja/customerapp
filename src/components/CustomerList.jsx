import "./CustomerItem.module.css";
import CustomerItem from "./CustomerItem";

const CustomerList = ({ customers, setCustomers }) => {
  
  //! delete customer
  const handleDelete = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id));
  };

  return (
    <ul className="customer-list">
      {customers.map((customer) => (
        <CustomerItem
          customer={customer}
          key={customer.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default CustomerList;
