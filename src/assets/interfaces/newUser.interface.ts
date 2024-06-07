interface user {
    name: string;
    setName: (name: string) => void;
    user: string;
    setUser: (user: string) => void;
  }
  
  export const newUser: user = {
    name: "",
    setName: (name: string) => {},
    user: "",
    setUser: (user: string) => {},
  };
  