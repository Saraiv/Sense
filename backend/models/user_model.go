package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID       primitive.ObjectID `json:"id"`
	Name     string             `json:"name,omitempty" validate:"required"`
	Password string             `json:"password,omitempty" validate:"required"`
	Email    string             `json:"email,omitempty" validate:"required"`
	Location string             `json:"location,omitempty" validate:"required"`
	Type     string             `json:"type,omitempty" validate:"required"`
}
