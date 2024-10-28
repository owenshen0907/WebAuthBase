// src/components/Login.js
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

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/login`;
            const response = await axios.post(
                apiUrl,
                { username, password },
                { withCredentials: true } // 允许携带凭证（Cookie）
            );
            if (response.status === 200) {
                // 登录成功后，重定向到 A 网站
                window.location.href = process.env.REACT_APP_REDIRECT_URL;
            }
        } catch (error) {
            console.error('登录失败:', error);
            alert('登录失败，请检查您的用户名和密码。');
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
                    登录
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
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleLogin}
                    >
                        登录
                    </Button>
                    <Link href="/register" variant="body2">
                        没有账号？立即注册
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;