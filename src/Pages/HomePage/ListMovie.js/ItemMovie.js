import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;
const ItemMovie = ({data}) => (
  <Card
    hoverable
  
    cover={<img className='h-40 object-cover object-top' alt="example" src={data.hinhAnh} />}
  >
    <Meta
      className="h-20"
      title={data.tenPhim}
      description={
        <NavLink
          className={"px-5 text-center py-2 border-2 border-red-500 rounded"}
          to={`./detail/${data.maPhim}`}
        >
          ĐẶT VÉ
        </NavLink>
      }
    />
  </Card>
);
export default ItemMovie;