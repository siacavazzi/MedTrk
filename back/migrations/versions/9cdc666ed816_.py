"""empty message

Revision ID: 9cdc666ed816
Revises: 
Create Date: 2024-01-25 14:57:04.300068

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9cdc666ed816'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('fname', sa.String(), nullable=True),
    sa.Column('lname', sa.String(), nullable=True),
    sa.Column('pass_hash', sa.String(), nullable=True),
    sa.Column('creation_date', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
