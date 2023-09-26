import { useState } from 'react';
import axios from 'axios';
import { Select } from '@dushangf/react-select';

function App() {
  const [selectValue, setSelectValue] = useState({});

  const fetchData = async (
    page?: number,
    search?: string
  ): Promise<{ label: string; value: any }[]> => {
    const res = await axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=10${
        search && '&search=' + search
      }`
    );

    return res.data.map((item: any) => ({ label: item.name, value: item }));
  };

  const onChange = (e: { label: string; value: any }) => {
    setSelectValue(e.value);
  };

  return (
    <div>
      <Select fetchData={fetchData} onChange={onChange} />
    </div>
  );
}

export default App;
