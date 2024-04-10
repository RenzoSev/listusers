import { PropsWithChildren } from 'react';
import { UserDocument } from '../../Users/users.service';

export interface CarouselCardProps extends PropsWithChildren {
  user: UserDocument;
}

function Card({
  user: { email, firstName, lastName, img, phone },
  children,
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

        <div className="card-actions justify-end">{children}</div>
      </div>
    </div>
  );
}

export default Card;
