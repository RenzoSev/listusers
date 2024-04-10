import { UserDocument } from '../../server/Users/users.service';

export interface ModalLocationProps {
  user: UserDocument;
}

function ModalLocation({ user }: ModalLocationProps) {
  return (
    <>
      <h3 className="font-bold text-lg my-2">
        {user.firstName} {user.lastName}
      </h3>
      <p>
        <span className="font-bold">City: </span>
        {user.city}
      </p>
      <p>
        <span className="font-bold">Street: </span>
        {user.street}
      </p>
      <p>
        <span className="font-bold">Street Number: </span>
        {user.streetNumber}
      </p>
      <p>
        <span className="font-bold">State: </span>
        {user.state}
      </p>
      <p>
        <span className="font-bold">Postcode: </span>
        {user.postcode}
      </p>
    </>
  );
}

export default ModalLocation;
