import { useEffect, useState } from 'react';
import { UserDocument } from './Users/users.service';
import { createUsersService } from './Users/users.factory';
import * as Carousel from './components/Carousel';
import * as Modal from './components/Modal';
import * as Icons from './components/Icons';

function App() {
  const [users, setUsers] = useState<UserDocument[]>([]);
  const [curIndex, setCurIndex] = useState(0);
  const length = 15;

  const usersService = createUsersService();

  const buildHandleSetModalUserIndex = (index: number) => {
    return () => {
      setCurIndex(index);
      document.getElementById('my_modal_3').showModal();
    };
  };

  const user = users[curIndex];

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await usersService.getUsers(length);
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Modal.Container>
        {user && <Modal.Location user={user} />}
      </Modal.Container>

      <Carousel.Container>
        <Carousel.ItemsContainer>
          {users.map((user, index) => (
            <Carousel.Item index={index} key={user.id}>
              <Carousel.Card user={user}>
                <button
                  className="btn btn-circle"
                  onClick={buildHandleSetModalUserIndex(index)}
                >
                  <Icons.Information className="h-6 w-6" />
                </button>
              </Carousel.Card>
            </Carousel.Item>
          ))}
        </Carousel.ItemsContainer>

        <Carousel.IndicatorButtonsContainer>
          {users.map((user, index) => (
            <Carousel.IndicatorButton index={index} key={user.id} />
          ))}
        </Carousel.IndicatorButtonsContainer>
      </Carousel.Container>
    </>
  );
}

export default App;
