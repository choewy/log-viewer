import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const BackPage: FC = () => {
  const effectRef = useRef<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!effectRef.current) {
      navigate(-1);
      return () => {
        effectRef.current = true;
      };
    }
  }, []);

  return <></>;
};
