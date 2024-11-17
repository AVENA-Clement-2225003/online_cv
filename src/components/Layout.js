import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <header>
                    <div>
                        <img src="/logo192.png" alt="My face"/>
                        <div>
                            <h1>AVENA Clément</h1>
                            <h2>ÉTUDIANT 3E ANNÉE - BUT INFORMATIQUE - AIX EN PROVENCE</h2>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/experiences">Expériences</a></li>
                            <li><a href="/software">Logiciels</a></li>
                            <li><a href="/ides">IDEs</a></li>
                            <li><a href="/languages">Langages</a></li>
                            <li><a href="/projects">Projets</a></li>
                            <li><a class="active-link" href="/">Accueil</a></li>
                            <li><a href="/contact">Coordonnées</a></li>
                        </ul>
                    </nav>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <p>&copy; 2024 Mon CV</p>
            </footer>
        </div>
    );
}

export default Layout;
