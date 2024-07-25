import Sidebar from '../components/Sidebar';
import BoardsMain from '../components/BoardsMain';
import { useState } from 'react';
import BoardContext from '../context/BoardContext';

const BoardsPage = () => {
  const boardData = {
    active: 0,
    boards: [
      {
        name: 'My Trello Board',
        bgcolor: '#069',
        list: [
          { id: "1", title: "To do", items: [{ id: "cdrFt", title: "Project Description 1" }] },
          { id: "2", title: "In Progress", items: [{ id: "cdrFv", title: "Project Description 2" }] },
          { id: "3", title: "Done", items: [{ id: "cdrFb", title: "Project Description 3" }] }
        ]
      }
    ]
  };

  const [allboard, setAllBoard] = useState(boardData);

  return (
    <BoardContext.Provider value={{ allboard, setAllBoard }}>
      <div className='content mt-24 text-white flex'>
        <Sidebar />
        <BoardsMain />
      </div>
    </BoardContext.Provider>
  );
};

export default BoardsPage;
