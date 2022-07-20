import {body} from 'express-validator'

export const registeredValidator = [
    body('email', 'Wrong e-mail').isEmail(),
    body('password', 'Password must be longer').isLength({min: 5}),
    body('fullName', 'Wrong name').isLength({min: 3}),
    body('avatarUrl', 'Wrong Url').optional().isURL(),
]

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];
