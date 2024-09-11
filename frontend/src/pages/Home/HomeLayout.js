import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import { useLocation } from "react-router-dom";
import Tags from "../Tags/Tags";
import authService from "../../services/authService";
import noteService from "../../services/noteService";

const HomeLayout = () => {
  const location = useLocation();

  const [userData, setUserData] = useState({});
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUser = async () => {
    try {
      setLoading(true);
      const user = await authService.getUser();
      setUserData(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getNotes = async () => {
    try {
      setLoading(true);
      const allNotes = await noteService.getNotes();
      setNotes(allNotes);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUser();
      await getNotes();
    };
    fetchData();
  }, []);

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col justify-between w-56 p-4 bg-white rounded-md">
        <Sidebar userData={userData} />
      </div>

      <div className="flex-1 px-6 bg-custom-bg overflow-y-auto">
        {location.pathname === "/dashboard" && (
          <Dashboard
            error={error}
            setError={setError}
            getNotes={getNotes}
            getUser={getUser}
            loading={loading}
            notes={notes}
            setNotes={setNotes}
            userData={userData}
          />
        )}
        {location.pathname === "/tags" && <Tags />}
      </div>
    </div>
  );
};

export default HomeLayout;
