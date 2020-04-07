import { User } from 'src/app/shared/models/user.model';

export const userFeatureKey = 'userFeature';

export interface FieldError {
    field: string;
    message: string;
}

export interface UserState {
    users: User[];
    errors?: {
        message: string;
        fields: {
            final: string;
            email: string;
            first_name: string;
            last_name: string;
            gender: string;
        }
    };
}

export const initialState: UserState = {
    users: [],
    errors: null
};

export const mapCreatedErrors = (message: string, errors: FieldError[]) => {
    const error = {
        message,
        fields: {
            final: '',
            email: '',
            first_name: '',
            last_name: '',
            gender: ''
        }
    };

    if (Array.isArray(errors)) {
        errors.forEach(err => {
            if (typeof error.fields[err.field] !== 'undefined') {
                error.fields[err.field] = err.message;
            }
        });
    }

    return error;
};
