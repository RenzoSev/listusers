import { useEffect, useState } from 'react';
import { UserDocument } from './Users/users.service';
import { createUsersService } from './Users/users.factory';
import * as Carousel from './components/Carousel';

function App() {
  const [users, setUsers] = useState<UserDocument[]>();
  const length = 15;

  const usersService = createUsersService();

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await usersService.getUsers(length);
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Carousel.Container>
        <Carousel.ItemsContainer>
          {users?.map((_user, index) => (
            <Carousel.Item index={index} key={index}>
              <Carousel.Card />
            </Carousel.Item>
          ))}
        </Carousel.ItemsContainer>

        <Carousel.IndicatorButtonsContainer>
          {users?.map((_user, index) => (
            <Carousel.IndicatorButton index={index} />
          ))}
        </Carousel.IndicatorButtonsContainer>
      </Carousel.Container>
    </>
  );
}

export default App;
