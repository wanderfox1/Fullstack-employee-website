import { Layout, Space, Typography } from 'antd';
import styles from "./index.module.css";

import React from 'react'
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import { CustomButton } from '../custom-button';

export const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon} />
                <Link to="/">
                    <CustomButton type="primary">
                        <Typography.Title level={1}>Сотрудники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to="/register">
                    <CustomButton type="primary" icon={<UserOutlined />}>
                        Зарегистрироваться
                    </CustomButton>
                </Link>
                <Link to="/login">
                    <CustomButton type="primary" icon={<LoginOutlined />}>
                        Войти
                    </CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    )
}