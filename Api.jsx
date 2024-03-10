import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from 'react';
import '../App.css'

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ganti path dengan path yang benar sesuai dengan struktur direktori proyek Anda
                const response = await axios.get('../../server/data/mahasiswa.json');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="App">
              <Navbar />
            <h1 className="text-center p-3 ">Data Mahasiswa</h1>
            <ul>
    {data.map((mahasiswa, index) => (
        <li key={index}>
            <p>
                <strong>No :</strong> {index + 1}
            </p>
            <p>
                <strong>Nama :</strong> {mahasiswa.nama}
            </p>
            <p>
                <strong>Asal :</strong> {mahasiswa.asal}
            </p>
            <p>
                <strong>Alamat :</strong> {mahasiswa.alamat}
            </p>
            <hr />
        </li>
    ))}
</ul>

   
            </div>

    );
};

export default Home;
