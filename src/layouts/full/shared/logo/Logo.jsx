import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoDark from '@/assets/images/logos/dark-logo.svg?react';
import LogoDarkRTL from '@/assets/images/logos/dark-rtl-logo.svg?react';
import LogoLight from '@/assets/images/logos/light-logo.svg?react';
import LogoLightRTL from '@/assets/images/logos/light-logo-rtl.svg?react';
import { styled } from '@mui/material';

const Logo = () => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? '40px' : '180px',
    overflow: 'hidden',
    display: 'block',
  }));

  if (customizer.activeDir === 'ltr') {
    return (
      <LinkStyled to="/">
        {customizer.activeMode === 'dark' ? (
          <LogoLight height={customizer.TopbarHeight} />
        ) : (
          <LogoDark height={customizer.TopbarHeight} />
        )}
      </LinkStyled>
    );
  }
  return (
    <LinkStyled to="/">
      {customizer.activeMode === 'dark' ? (
        <LogoDarkRTL height={customizer.TopbarHeight} />
      ) : (
        <LogoLightRTL height={customizer.TopbarHeight} />
      )}
    </LinkStyled>
  );
};

export default Logo;
