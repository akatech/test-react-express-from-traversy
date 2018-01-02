const express = require('express');

const app = express();
app.get('/api/customers', (req,res) => {
    const customers = [
        {id: 1, firstName: 'Abdou Karim', lastName: 'Cissokho'},
        {id: 2, firstName: 'Mame Bousso', lastName: 'Diokhané'},
        {id: 3, firstName: 'Mouhamed Latyr', lastName: 'Ndiaye'},
        {id: 4, firstName: 'Ibrahima Samba', lastName: 'Diop'},
    ];
    res.json(customers);
});
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));