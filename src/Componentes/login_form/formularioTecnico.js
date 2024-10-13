import "./styleTecnico.css";

export default function formularioTecnico() {
    return (
        <div>
            <body>
                <div class="container">
                    <div class="links">
                        <a href="#">¿Ya tienes una cuenta?</a>
                        <a href="#">Inicia Sesión</a>
                    </div>
                    <form action="#">
                        <div class="input-group">
                            <h4>Nombre</h4>
                            <input type="text" placeholder="" required />
                        </div>
                        <div class="input-group">
                            <h4>Apellido</h4>
                            <input type="text" placeholder="" required />
                        </div>
                        <div class="input-group">
                            <h4>Telefono</h4>
                            <input type="tel" placeholder="" required />
                        </div>
                        <div class="input-group">
                            <div class="experience-container">
                                <div class="tag">
                                    Eléctrico
                                    <button type="button">&times;</button>
                                </div>
                                <button type="button" class="add-button">+</button>
                            </div>
                        </div>
                        <div class="input-group">
                            <h4>Direccion</h4>
                            <input type="text" placeholder="" required />
                        </div>
                        <div class="input-group">
                            <h4>Municipio</h4>
                            <input type="text" placeholder="" required />
                        </div>
                        <div class="input-group">
                            <h4>Departamento</h4>
                            <input type="text" placeholder="" required />
                        </div>
                        <div class="input-group">
                            <h4>Correo Electronico</h4>
                            <input type="email" placeholder="" required />
                        </div>
                        <div class="input-group">
                            <h4>Contraseña</h4>
                            <input type="password" placeholder="" required />
                        </div>
                        <div class="input-group">
                            <h4>Confirmar Contraseña</h4>
                            <input type="password" placeholder="" required />
                        </div>
                        <div class="actions">
                            <button type="submit">Registrarse</button>
                        </div>
                    </form>
                </div>
            </body>
        </div>
    )
}
