import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({ name: 'John Doe', age: 30 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

 export const useUser = (): UserContextProps => {
   const context = useContext(UserContext);
   if (!context) {
     throw new Error('useUser must be used within a UserProvider');
   }
   return context;
 };
