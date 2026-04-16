import logging
from logging.handlers import TimedRotatingFileHandler


def setup_logging():
    logger = logging.getLogger("app_logger")
    logger.setLevel(logging.INFO)

    if not logger.handlers:
        stream_handler = logging.StreamHandler()
        stream_format = logging.Formatter(
            "%(asctime)s [%(levelname)s] %(name)s: %(message)s"
        )
        stream_handler.setFormatter(stream_format)
        logger.addHandler(stream_handler)

        file_handler = TimedRotatingFileHandler(
            "app.log", when="midnight", interval=1, backupCount=7
        )
        file_format = logging.Formatter(
            "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
        )
        file_handler.setFormatter(file_format)
        logger.addHandler(file_handler)
    return logger

logger = setup_logging()
