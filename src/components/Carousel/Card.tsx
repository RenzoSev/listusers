import { UserDocument } from '../../Users/users.service';

export interface CarouselCardProps {
  user: UserDocument;
  handleSetModalUserIndex: () => void;
}

function Card({
  user: { email, firstName, lastName, img, phone },
  handleSetModalUserIndex,
}: CarouselCardProps) {
  return (
    <div className="card w-96 glass">
      <figure className="p-2">
        <img src={img} alt={`${firstName} ${lastName} picture`} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>

        <p>{phone}</p>
        <p>{email}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleSetModalUserIndex}>
            See details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
