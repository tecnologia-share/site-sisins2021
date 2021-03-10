import Button from '../Button/button';
const MenuHamb = () => {
  return (
    <ul>
      <Button href="/" name="Home" />
      <Button href="/FAQ" name="FAQ" />
      <Button href="/inscricoes" name="Inscrições" />
      <Button href="/news" name="Notícias" />
    </ul>
  );
};

export default MenuHamb;
