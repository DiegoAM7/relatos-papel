const ProfileCard = ({ user }) => {
  return (
    <section className="profile-card">
      <h1>Mi perfil</h1>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Rol: {user.role}</p>
    </section>
  );
};

export default ProfileCard;
