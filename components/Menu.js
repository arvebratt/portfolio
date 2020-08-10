import styled from 'styled-components';
import Radio from "@material-ui/core/Radio";

const Menu = (props) => {
  let selectedValue = props.selected;

  const handleChange = (event) => {
    props.moveTo(event.target.value);
  };

  return (
    <Nav
      className='menu'
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <ul className='actions'>
        <div>
          Home
          <Radio
            checked={selectedValue === 1}
            onChange={handleChange}
            value='1'
            name='radio-button'
            inputProps={{ "aria-label": "A" }}
          />
          Coding
          <Radio
            checked={selectedValue === 2}
            onChange={handleChange}
            value='2'
            name='radio-button'
            inputProps={{ "aria-label": "B" }}
          />
          <Logo src="/logotemp.svg" />
          <Radio
            checked={selectedValue === 3}
            onChange={handleChange}
            value='3'
            name='radio-button'
            inputProps={{ "aria-label": "C" }}
          />
          Art
          <Radio
            checked={selectedValue === 4}
            onChange={handleChange}
            value='4'
            name='radio-button'
            inputProps={{ "aria-label": "D" }}
          />
          Contact
        </div>
      </ul>
    </Nav>
  );
};

export default Menu;

const Logo = styled.img`
  padding: 1rem;
  height: 2rem;
  @media screen and (max-width: 768px) {
    height: 15rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  position: fixed;
  z-index: 1;
  line-height: 65px;
  text-align: center;
`;