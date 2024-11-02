// src/components/Register.js
import React, { useState } from 'react';
import {
    Container,
    Box,
    TextField,
    Button,
    Typography,
    Link,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/login`;
            const response = await axios.post(
                apiUrl,
                {username,password,},
                {withCredentials: true, // 如果需要发送凭据
            });
            if (response.status === 201) {
                alert('注册成功，请登录。');
                navigate('/');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            alert('注册失败，请重试。');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: 3,
                }}
            >
                <Typography component="h1" variant="h5">
                    注册
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="用户名"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="密码"
                        type="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleRegister}
                    >
                        注册
                    </Button>
                    <Link href="/" variant="body2">
                        已有账号？立即登录
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}

export default Register;