import React, { useState } from 'react'
import {Container, Form, Button} from 'react-bootstrap';

const Search = ({ onSearch }) => {

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchValue);
        setSearchValue('');
    }
    
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <>
            <Container fluid className="bg-warning text-center py-3">
                <h1>IMAGE API</h1>
                <Form className="d-flex justify-content-center" onSubmit={handleSearch}>
                    <Form.Group controlId="search">
                        <Form.Label>
                            Search Image:
                        </Form.Label>
                        <Container className="d-flex">
                            <Form.Control 
                                type="search" 
                                className="w-100 rounded-start rounded-0" placeholder="Search Anything..." 
                                onChange={handleInputChange} 
                                value={searchValue}>
                            </Form.Control>
                            <Button 
                                variant="dark" 
                                className="rounded-end rounded-0" 
                                onClick={handleSearch} 
                                disabled={searchValue === ''}>
                                Search
                            </Button>
                        </Container>
                    </Form.Group>
                </Form>
            </Container>
        </>
    ) 
}

export default Search