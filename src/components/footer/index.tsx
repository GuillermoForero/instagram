import * as React from "react";
import {BusinessName, FooterContainer, LiFooter, LinkFooter, NavFooter, UlFooter} from './styles'
export const Footer = () => (
        <FooterContainer>
            <NavFooter>
                <UlFooter>
                    <LiFooter>
                        <LinkFooter to={'/home'}>ABOUT</LinkFooter>
                    </LiFooter>
                    <LiFooter>
                        <LinkFooter to={'/home'}>HELP</LinkFooter>
                    </LiFooter>
                    <LiFooter>
                        <LinkFooter to={'/home'}>PRESS</LinkFooter>
                    </LiFooter>
                    <LiFooter>
                        <LinkFooter to={'/home'}>API</LinkFooter>
                    </LiFooter>
                    <LiFooter>
                        <LinkFooter to={'/home'}>JOBS</LinkFooter>
                    </LiFooter>
                    <LiFooter>
                        <LinkFooter to={'/home'}>TERMS</LinkFooter>
                    </LiFooter>
                    <LiFooter>
                        <LinkFooter to={'/home'}>LOCATIONS</LinkFooter>
                    </LiFooter>
                    <LiFooter>
                        <LinkFooter to={'/home'}>TOP ACCOUNTS</LinkFooter>
                    </LiFooter>
                    <LiFooter>
                        <LinkFooter to={'/home'}>HASHTAGS</LinkFooter>
                    </LiFooter>
                    <LiFooter>
                        <LinkFooter to={'/home'}>LANGUAGE</LinkFooter>
                    </LiFooter>
                </UlFooter>
            </NavFooter>
            <BusinessName>© 2020 INSTAGRAM FROM FACEBOOK</BusinessName>
        </FooterContainer>
);
