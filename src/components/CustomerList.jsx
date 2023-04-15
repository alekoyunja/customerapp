import "./CustomerList.css"
import CustomerItem from './CustomerItem';


const CustomerList = ({customers}) => {


  return (
    <ul className='customer-list'>
        {customers.map((customer)=>(
            <CustomerItem customer={customer} key={customer.id}/>
        ))}
       
    </ul>
  );
}

export default CustomerList;