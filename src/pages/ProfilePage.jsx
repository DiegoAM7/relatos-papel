import { useContext } from "react";
import OrderHistory from "../components/users/OrderHistory";
import ProfileCard from "../components/users/ProfileCard";
import AuthContext from "../components/context/AuthContext";
import { orders } from "../mocks/orders";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Inicia sesion para ver tu perfil.</p>;
  }

  return (
    <>
      <ProfileCard user={user} />
      <OrderHistory orders={orders} />
    </>
  );
};

export default ProfilePage;
