import {Router} from 'express'
import {comprobarTokenPassword, confirmarEmail, recuperarPassword, registro, crearNuevaPassword } from '../controllers/Jugador_controller.js'
const router = Router()


router.post('/registro',registro)
router.get('/confirmar/:token',confirmarEmail)
router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPassword)
router.post('/nuevopassword/:token',crearNuevaPassword)

export default router