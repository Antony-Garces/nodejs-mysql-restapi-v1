import { Router } from 'express'
import {methods as employeesControllers} from '../controllers/employees.controller.js'

const router = Router()

router.get('/api/v1/employees', employeesControllers.getEmployees)
router.get('/api/v1/employees/:id', employeesControllers.getEmployee)
router.post('/api/v1/employees', employeesControllers.createEmployees)
router.patch('/api/v1/employees/:id', employeesControllers.updateEmployees)
router.delete('/api/v1/employees/:id', employeesControllers.deleteEmployees)


export default router