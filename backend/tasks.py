# -*- coding: utf-8 -*-
"""Invoke tasks.py

Details see manual: http://docs.pyinvoke.org/en/1.0/getting-started.html
"""
# ThirdParty Library
from invoke import task


SRC_DIR = 'apps/ config/'


@task
def install(ctx):
    """Install dependencies."""
    ctx.run('pipenv install')


@task
def yapf(ctx):
    """Run yapf."""
    ctx.run(f'yapf -i --recursive  {SRC_DIR}')


@task
def flake8(ctx):
    """Run flake8."""
    ctx.run(f'flake8 {SRC_DIR}')


@task
def isort(ctx):
    """Run isort."""
    ctx.run(f'isort -rc {SRC_DIR}')


@task(pre=[isort, yapf, flake8])
def lint(ctx):
    """Run linters."""
