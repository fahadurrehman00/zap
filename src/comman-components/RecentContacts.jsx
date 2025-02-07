import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const RecentContacts = () => {
  const contacts = [
    {
      name: "Rowan Blake",
      email: "rowan.glow@email.com",
      profileImage:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      name: "Skyler Quin",
      email: "casey.@email.com",
      profileImage:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      name: "Alex Taylor",
      email: "alex.vibes23@email.com",
      profileImage:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      name: "Jordan Casey",
      email: "taylor.uni@email.com",
      profileImage:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      name: "Morgan Riley",
      email: "jordan.w@email.com",
      profileImage:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      name: "Parker Reese",
      email: "morgan.t19@email.com",
      profileImage:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      name: "Dakota Avery",
      email: "riley.spark8@email.com",
      profileImage:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
  ];

  return (
    <div className='p-4 text-secondary'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold'>Recent Contacts</h2>
        <BsThreeDotsVertical className=' cursor-pointer' />
      </div>
      <div>
        {contacts.map((contact) => (
          <div
            key={contact.email}
            className='flex items-center justify-between py-2'
          >
            <div className='flex items-center space-x-3'>
              <img
                src={contact.profileImage}
                alt={contact.name}
                className='w-10 h-10 rounded-full'
              />
              <span className='font-medium'>{contact.name}</span>
            </div>
            <span className='text-sm text-left'>{contact.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentContacts;
